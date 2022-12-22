import React,{useState} from 'react'
import "./EventsPage.css"
import Events from './Events'
import useCollapse from 'react-collapsed'

// import icon from "./01.png"

const data=[
  {
    para:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis nam quasi, inventore modi neque, ipsam unde voluptatum iste perferendis sint, amet hic repellendus animi distinctio accusamus nemo minus labore cumque?",
    readMore:" Omnis nam quasi, inventore modi neque, ipsam unde voluptatum iste perferendis sint, amet hic repellendus animi distinctio accusamus nemo minus labore cumque?"
  },
  {
    para:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis nam quasi, inventore modi neque, ipsam unde voluptatum iste perferendis sint, amet hic repellendus animi distinctio accusamus nemo minus labore cumque?",
    readMore:" Omnis nam quasi, inventore modi neque, ipsam unde voluptatum iste perferendis sint, amet hic repellendus animi distinctio accusamus nemo minus labore cumque?"
  },
  {
    para:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis nam quasi, inventore modi neque, ipsam unde voluptatum iste perferendis sint, amet hic repellendus animi distinctio accusamus nemo minus labore cumque?",
    readMore:" Omnis nam quasi, inventore modi neque, ipsam unde voluptatum iste perferendis sint, amet hic repellendus animi distinctio accusamus nemo minus labore cumque?"
  },
  {
    para:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis nam quasi, inventore modi neque, ipsam unde voluptatum iste perferendis sint, amet hic repellendus animi distinctio accusamus nemo minus labore cumque?",
    readMore:" Omnis nam quasi, inventore modi neque, ipsam unde voluptatum iste perferendis sint, amet hic repellendus animi distinctio accusamus nemo minus labore cumque?"
  },
]

const ReadMore=()=>{

}
const EventsPage = () => {
  const [isExpanded, setExpanded] = useState(false)
  const { getCollapseProps, getToggleProps } = useCollapse({ isExpanded })

  return (
    <div className='EventPage'>
      <h1>Cyber Intrusion</h1>
      <div className='EventContainer'>
      
      {data.map((paragraphs,i)=>{
          return(
            <Events key={i} data={data[i].para} readmore={data[i].readMore}/>          
          );
      })}   
      </div>  
    </div>
  )
}

export default EventsPage;