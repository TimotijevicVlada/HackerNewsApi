import React from 'react';

function Posts({hacker}) {

    return (
            <div className="items">
                {hacker.map(hack => (
                    <div className="row">
                        <h3>{hack.title}</h3>
                        <div className="info_bellow">
                            <div className="points"><i class="fas fa-heart"></i><span>{hack.score} points</span></div>
                            <div className="name"><i class="fas fa-user"></i><span>{hack.by}</span></div>
                            <div className="time"><i class="far fa-clock"></i><span>{hack.time} hours ago</span></div>
                            <div className="comments">{hack.descendants} comments</div>
                        </div>
                    </div>
                ))}
            </div>
    )
}

export default Posts;
