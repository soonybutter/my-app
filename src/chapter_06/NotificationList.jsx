import React from "react";
import Notification from "./Notification";

const reservedNotifications=[
    {
        id: 1,
        message: "안녕하세요. 오늘 일정을 알려드립니다.",
    },
    {
        id: 2,
        message: "점심식사 시간입니다.",
    },
    {
        id: 3,
        message: "이제 곧 미팅이 시작됩니다.",
    },

];

var timer;

class NotificationList extends React.Component{
    constructor(props){
        super(props);

        //빈 배열을 넣어줌
        this.state ={
            notifications: [],
        };
    }

    //1초마다 미리 만들어준 배열을 가져와서 notifications 배열을 업데이트해줌.
    componentDidMount(){
        const { notifications }=  this.state;
        timer =setInterval(() =>{
            if (notifications.length < reservedNotifications.length){
                const index = notifications.length;
                notifications.push(reservedNotifications[index]);
               
                this.setState({
                    notifications: notifications,
                });
            }
            else{
                clearInterval(timer);
            }
        },1000);
    }

    render(){
        return (
            <div>
                {this.state.notifications.map((notification)=>{
                    return(
                    <Notification
                        key={notification.id}
                        id ={notification.id}
                        message={notification.message} 
                    />
                    );
                })}
            </div>
        );
    }
}

export default NotificationList;
