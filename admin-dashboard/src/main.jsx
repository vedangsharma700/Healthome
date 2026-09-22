import React, {useEffect, useMemo, useState} from "react";
import {createRoot} from "react-dom/client";
import "./styles.css";

const API = import.meta.env.VITE_API_URL || "http://localhost:4000";
const nav = ["Overview","Users","Doctors","Services","Bookings","Labs","Pharmacy","Payments","Wallet","Health Records","Consultations","Notifications","Support Agents","Audit Logs","Settings"];

async function api(path, options={}) {
  const token = localStorage.getItem("healthome_admin_token");
  const headers = {"Content-Type":"application/json", ...(options.headers||{})};
  if (token) headers.Authorization = `Bearer ${token}`;
  const r = await fetch(`${API}${path}`, {...options, headers});
  const data = await r.json().catch(()=>({}));
  if (!r.ok) throw new Error(data.message || `Request failed (${r.status})`);
  return data;
}

function Login({onLogin}) {
  const [phone,setPhone]=useState(localStorage.getItem("healthome_admin_phone")||"9999999999");
  const [code,setCode]=useState("");
  const [devOtp,setDevOtp]=useState("");
  const [stage,setStage]=useState("phone");
  const [busy,setBusy]=useState(false);
  const [error,setError]=useState("");

  async function requestOtp(e){
    e.preventDefault(); setBusy(true); setError("");
    try {
      const d=await api("/api/auth/request-otp",{method:"POST",body:JSON.stringify({phone})});
      setDevOtp(d.devOtp||"");
      setStage("otp");
    } catch(e){setError(e.message)} finally{setBusy(false)}
  }
  async function verify(e){
    e.preventDefault(); setBusy(true); setError("");
    try {
      const d=await api("/api/auth/verify-otp",{method:"POST",body:JSON.stringify({phone,code})});
      if(d.user?.role!=="ADMIN") throw new Error("This account is not an ADMIN account.");
      localStorage.setItem("healthome_admin_token",d.token);
      localStorage.setItem("healthome_admin_phone",phone);
      onLogin(d.user);
    } catch(e){setError(e.message)} finally{setBusy(false)}
  }
  return <div className="login-shell"><div className="login-card">
    <div className="brand center">Health<span>ome</span><small>ADMIN CONTROL CENTER</small></div>
    <h1>Admin sign in</h1><p className="muted">Secure access to the Healthome operations dashboard.</p>
    {stage==="phone" ? <form onSubmit={requestOtp}>
      <label>Admin phone</label><input value={phone} onChange={e=>setPhone(e.target.value)} placeholder="10-digit phone" required />
      <button className="primary full" disabled={busy}>{busy?"Sending…":"Send OTP"}</button>
    </form> : <form onSubmit={verify}>
      <label>OTP</label><input value={code} onChange={e=>setCode(e.target.value)} placeholder="6-digit OTP" inputMode="numeric" required />
      {devOtp && <div className="dev-otp">Development OTP: <b>{devOtp}</b></div>}
      <button className="primary full" disabled={busy}>{busy?"Verifying…":"Sign in"}</button>
      <button type="button" className="link-btn" onClick={()=>setStage("phone")}>Change phone</button>
    </form>}
    {error && <div className="error">{error}</div>}
  </div></div>
}

function Admin({user,onLogout}) {
  const [active,setActive]=useState("Overview");
  const [stats,setStats]=useState(null);
  const [rows,setRows]=useState([]);
  const [loading,setLoading]=useState(false);
  const [error,setError]=useState("");
  const [apiOnline,setApiOnline]=useState(false);

  const modulePath = useMemo(()=>({
    Users:"/api/control/admin/users", Doctors:"/api/control/admin/doctors",
    Services:"/api/control/admin/services", Bookings:"/api/control/admin/bookings",
    Labs:"/api/control/admin/labs", Pharmacy:"/api/control/admin/pharmacy",
    Payments:"/api/control/admin/payments", Notifications:"/api/control/admin/notifications",
    "Health Records":"/api/control/admin/health-records"
  })[active], [active]);

  async function load(){
    setLoading(true); setError("");
    try {
      const h=await fetch(`${API}/health`);
      setApiOnline(h.ok);
      if(active==="Overview"){
        const d=await api("/api/control/admin/overview"); setStats(d.counts); setRows([]);
      } else if(modulePath){
        const d=await api(modulePath);
        const key=Object.keys(d).find(k=>Array.isArray(d[k]));
        setRows(key?d[key]:[]);
      } else { setRows([]); }
    } catch(e){ setError(e.message); if(String(e.message).includes("401")||String(e.message).includes("403")) onLogout(); }
    finally{setLoading(false)}
  }
  useEffect(()=>{load()},[active]);

  const cards = active==="Overview" ? [
    ["Patients",stats?.patients ?? "—"],["Doctors",stats?.doctors ?? "—"],["Bookings",stats?.bookings ?? "—"],
    ["Revenue",stats ? `₹${Number(stats.revenue||0).toLocaleString("en-IN")}` : "—"],
    ["Pending bookings",stats?.pendingBookings ?? "—"],["Active consultations",stats?.activeConsultations ?? "—"]
  ] : [["Records",rows.length],["Access","ADMIN"],["API",apiOnline?"Connected":"Offline"]];

  return <div className="shell">
    <aside><div className="brand">Health<span>ome</span><small>CONTROL CENTER</small></div>
    <div className="admin-user">{user?.name||"Administrator"}<small>{user?.phone}</small></div>
    {nav.map(n=><button className={n===active?"active":""} onClick={()=>setActive(n)} key={n}>{n}</button>)}
    <button className="logout" onClick={onLogout}>Sign out</button></aside>
    <main><header><div><p>Admin Control Center</p><h1>{active}</h1></div><div className={`status ${apiOnline?"online":""}`}><i/> API {apiOnline?"Online":"Offline"}</div></header>
    <section className="grid">{cards.map(([a,b])=><article className="card" key={a}><small>{a}</small><strong>{b}</strong></article>)}</section>
    <section className="panel"><div className="panel-head"><div><h2>{active}</h2><p>{active==="Overview"?"Live operational metrics from your Healthome PostgreSQL database.":`Live ${active.toLowerCase()} records from the Healthome backend.`}</p></div><button className="primary" onClick={load} disabled={loading}>{loading?"Refreshing…":"Refresh data"}</button></div>
      {error && <div className="error">{error}</div>}
      {active==="Overview" ? <div className="summary"><div><b>{stats?.users??"—"}</b><span>Total users</span></div><div><b>{stats?.services??"—"}</b><span>Active services</span></div><div><b>{stats?.labs??"—"}</b><span>Active lab tests</span></div><div><b>{stats?.medicines??"—"}</b><span>Active medicines</span></div></div>
      : <DataTable active={active} rows={rows}/>}
    </section></main>
  </div>
}

function DataTable({active,rows}) {
  if(!rows.length) return <div className="empty">No records found in Supabase yet.</div>;
  const configs={
    Users:["Name","Phone","Role","Created"], Doctors:["Doctor","Specialty","Fee","Active"],
    Services:["Name","Category","Price","Active"], Bookings:["Patient","Doctor","Service","Status","Scheduled"],
    Labs:["Name","Category","Price","Active"], Pharmacy:["Medicine","Category","Stock","Price"],
    Payments:["Patient","Amount","Status","Created"], Notifications:["User","Title","Read","Created"],
    "Health Records":["Patient","Title","Type","Created"]
  };
  const cols=configs[active]||Object.keys(rows[0]).slice(0,4);
  const cell=(r,c)=>{
    if(active==="Users") return c==="Name"?r.name||"—":c==="Phone"?r.phone:c==="Role"?r.role:new Date(r.createdAt).toLocaleString();
    if(active==="Doctors") return c==="Doctor"?r.user?.name||"—":c==="Specialty"?r.specialty:c==="Fee"?`₹${r.fee}`:r.active?"Yes":"No";
    if(active==="Services") return c==="Name"?r.name:c==="Category"?r.category:c==="Price"?`₹${r.price}`:r.active?"Yes":"No";
    if(active==="Bookings") return c==="Patient"?r.user?.name||r.user?.phone||"—":c==="Doctor"?r.doctor?.user?.name||"—":c==="Service"?r.service?.name||"—":c==="Status"?r.status:new Date(r.scheduledAt).toLocaleString();
    if(active==="Labs") return c==="Name"?r.name:c==="Category"?r.category:c==="Price"?`₹${r.price}`:r.active?"Yes":"No";
    if(active==="Pharmacy") return c==="Medicine"?r.name:c==="Category"?r.category:c==="Stock"?r.stock:`₹${r.price}`;
    if(active==="Payments") return c==="Patient"?r.user?.name||r.user?.phone||"—":c==="Amount"?`₹${r.amount}`:c==="Status"?r.status:new Date(r.createdAt).toLocaleString();
    if(active==="Notifications") return c==="User"?r.user?.name||r.user?.phone||"—":c==="Title"?r.title:c==="Read"?r.readAt?"Yes":"No":new Date(r.createdAt).toLocaleString();
    if(active==="Health Records") return c==="Patient"?r.user?.name||r.user?.phone||"—":c==="Title"?r.title:c==="Type"?r.type:new Date(r.createdAt).toLocaleString();
    return "—";
  };
  return <div className="table-wrap"><table><thead><tr>{cols.map(c=><th key={c}>{c}</th>)}</tr></thead><tbody>{rows.map((r,i)=><tr key={r.id||i}>{cols.map(c=><td key={c}>{cell(r,c)}</td>)}</tr>)}</tbody></table></div>;
}

function App(){
 const [user,setUser]=useState(null);
 useEffect(()=>{const t=localStorage.getItem("healthome_admin_token"); if(t) api("/api/control/admin/overview").then(()=>setUser({name:"Administrator"})).catch(()=>localStorage.removeItem("healthome_admin_token"))},[]);
 const logout=()=>{localStorage.removeItem("healthome_admin_token");setUser(null)};
 return user ? <Admin user={user} onLogout={logout}/> : <Login onLogin={setUser}/>;
}
createRoot(document.getElementById("root")).render(<App/>);
