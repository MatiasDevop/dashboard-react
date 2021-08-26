import React from 'react'
import "./widgetSm.css";

const WidgetSm = () => {
    return (
        <div className="widgetSm">
            <span className="widgetSmTitle">New join Members</span>
            <ul className="widgetSmList">
                <li className="widgetSmListItem">
                    <img src="https://ae01.alicdn.com/kf/HTB15W11BFOWBuNjy0Fiq6xFxVXay/Black-and-White-Girl-Ancient-Greek-mythology-Goddess-Athena-Cosplay-Woman-Halloween-Costume-Carnival-Purim-Role.jpg"alt="" className="widgetSmImg" />
                    <div className="widgetSmUser">
                        <span className="widgetSmUsername">Anna Keller</span>
                        <span className="widgetSmUserTitle">Software Enginner</span>
                    </div>
                    <button className="widgetSmButton">
                        
                    </button>
                </li>
            </ul>
        </div>
    )
}

export default WidgetSm
