
import React,{useState} from "react";
import {SafeAreaView,View,Text,Pressable,StyleSheet,ScrollView} from "react-native";
const tabs=["Queue","Bookings","Patients","Support","Profile"];
export default function App(){
 const [tab,setTab]=useState("Queue");
 return <SafeAreaView style={s.root}><View style={s.header}><Text style={s.kicker}>HEALTHOME</Text><Text style={s.title}>Agent Console</Text><Text style={s.sub}>Support and operations workspace</Text></View>
 <ScrollView contentContainerStyle={s.content}>
 <Text style={s.section}>{tab}</Text>
 {tab==="Queue" && <><Card t="New support requests" v="—"/><Card t="Today's bookings needing attention" v="—"/><Card t="Escalations" v="—"/></>}
 {tab==="Bookings" && <Card t="Booking operations" v="Review, confirm, cancel and escalate"/></>}
 {tab==="Patients" && <Card t="Patient lookup" v="Search via secure backend"/></>}
 {tab==="Support" && <Card t="Support tickets" v="Assign, reply and resolve"/></>}
 {tab==="Profile" && <Card t="Agent account" v="Role and security settings"/></>}
 </ScrollView>
 <View style={s.nav}>{tabs.map(x=><Pressable key={x} onPress={()=>setTab(x)} style={[s.navItem,tab===x&&s.navActive]}><Text style={[s.navText,tab===x&&s.navTextActive]}>{x}</Text></Pressable>)}</View>
 </SafeAreaView>
}
function Card({t,v}){return <View style={s.card}><Text style={s.cardTitle}>{t}</Text><Text style={s.cardValue}>{v}</Text></View>}
const s=StyleSheet.create({
 root:{flex:1,backgroundColor:"#f5f8fa"},header:{padding:24,paddingTop:30,backgroundColor:"#0d2630"},kicker:{fontSize:11,letterSpacing:2,color:"#65d2c3"},title:{fontSize:30,fontWeight:"800",color:"#fff",marginTop:5},sub:{color:"#a9c0c7",marginTop:6},content:{padding:20,paddingBottom:100},section:{fontSize:22,fontWeight:"800",color:"#15242b",marginBottom:14},card:{backgroundColor:"#fff",borderRadius:16,padding:18,marginBottom:12,borderWidth:1,borderColor:"#e2eaed"},cardTitle:{fontSize:16,fontWeight:"700",color:"#18323a"},cardValue:{marginTop:8,color:"#70848b",lineHeight:20},nav:{position:"absolute",bottom:0,left:0,right:0,backgroundColor:"#fff",borderTopWidth:1,borderTopColor:"#e1e9eb",flexDirection:"row",paddingVertical:10},navItem:{flex:1,alignItems:"center",padding:8,borderRadius:10},navActive:{backgroundColor:"#e8f6f4"},navText:{fontSize:11,color:"#72858b"},navTextActive:{color:"#0b8f82",fontWeight:"700"}
});
