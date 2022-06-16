import React from "react"
import Card from "../Card/Card"
import Propcard from "../Card/Propcard"
import Footer from "../Footer/Footer"
import Hero from "../Hero/Hero"
// import Header from "../Header/Header"
const Home =()=>{
  return(
<div>
    <Hero/>
    <Card title="Grow Together"
 subtitle="Huddle re-imagines the way we build communities.You have a voice and so does your audience.Create connection with your users as you engage in genuie conversation"
 pictures="/images/illustration-grow-together.svg"

    />
    <Card
    title="FLOWING CONVERSATION"
    subtitle="Huddle re-imagines the way we build communities.You have a voice and so does your audience.Create connection with your users as you engage in genuie conversation"
    swap="row-reverse"
    pictures="/images/illustration-flowing-conversation.svg"

    />
    <Card
    title="YOUR USERS"
    subtitle="Huddle re-imagines the way we build communities.You have a voice and so does your audience.Create connection with your users as you engage in genuie conversation"
    pictures="/images/illustration-your-users.svg"

    />
    <Footer/>
    <Propcard/>
</div>
  )
}
export default Home