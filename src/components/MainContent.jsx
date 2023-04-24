import React from 'react';

function MainContent() {
    return (
        <div className="main flex justify-center bg-lightGray text-white pt-14 pb-32">
            <div className="flex flex-col">
                <h1 className="h1_font mb-11">Fun facts about React</h1>
                <ul className="list-disc space-y-5 pl-10 list-outside text-base w-96">
                    <li className="leading-5"> <span>Was first released in 2013</span></li>
                    <li className="leading-5"> <span>Was originally created by Jordan Walke</span></li>
                    <li className="leading-5"> <span>Has well over 100K stars on GitHub</span></li>
                    <li className="leading-5"> <span>Is maintained by Facebook</span></li>
                    <li className="leading-5"> <span>Powers thosands of enterprise apps, including mobile apps</span></li>
                </ul>
            </div>
        </div>
    )
}

export default MainContent;