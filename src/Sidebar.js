import React from 'react';
import "./Sidebar.css";
import {Avatar, IconButton} from "@material-ui/core";
import DonutLargeIcon from "@material-ui/icons/DonutLarge";
import ChatIcon from "@material-ui/icons/Chat";
import MoreVertIcon from '@material-ui/icons/MoreVert';
import SearchOutlinedIcon from '@material-ui/icons/SearchOutlined';
import SidebarChat from "./SidebarChat";
// import {Avatar} from "@material-ui/core";
// import {Avatar} from "@material-ui/core";
// import {Avatar} from "@material-ui/core";



function Sidebar() {
    return (
        <div className='sidebar'>
           
           <div className='sidebar_header'>
               <Avatar />
            <div className="sidebar_headerright">
                <IconButton>
                <DonutLargeIcon />
               
                    </IconButton>
                    <IconButton>
                    <MoreVertIcon /> 
                    </IconButton>
                    <IconButton>
                    <ChatIcon />
               
                    </IconButton>
                    
                
                



            </div>

               </div>

               <div className='sidebar_search'>
                   <div class="sidebar_searchcontainer">

                   <SearchOutlinedIcon />   
                   <input placeholder="Search or start new chat" type='text'></input>
                   </div> 

                    

               </div>
              <div className='sidebar_chats'>
                   {/* <SidebarChat />
                   <Side barChat />
                   <SidebarChat />
                   <SidebarChat />
                   <SidebarChat />
                   <SidebarChat />
                   <SidebarChat /> */}


                 
               </div>
            
        </div>
    )
}

export default Sidebar
