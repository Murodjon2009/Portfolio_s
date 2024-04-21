import { FC } from "react";

interface IPersonalInfo{
    title: string;
    name: string;
}

export const PersonalInfo1:FC<IPersonalInfo> =({title,name})=> {
    return (
        <div className='AboutMe__box_div1_firstName'>
            <p className="AboutMe__box_div1_firstName_title">{title}</p>
            <p className="AboutMe__box_div1_firstName_point">:</p>
            <p className="AboutMe__box_div1_firstName_name">{name}</p>
        </div>
    )
}

export const PersonalInfo2:FC<IPersonalInfo> =({title,name})=> {
    return (
        <div className='AboutMe__box_div2_firstName'>
            <p className="AboutMe__box_div2_firstName_title">{title}</p>
            <p className="AboutMe__box_div2_firstName_point">:</p>
            <p className="AboutMe__box_div2_firstName_name">{name}</p>
        </div>
    )
}