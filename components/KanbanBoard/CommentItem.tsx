import React from "react";
import dayjs from "dayjs";

const CommentItem = ({author, date, comment}:{author: string, date: string, comment: string}) => {
    return (
        <>
            <div className='py-3 px-4 bg-neutral-800 rounded-2xl'>
                <div className='flex justify-between items-center pb-2 border-b border-neutral-700'>
                    <div className='text-sm font-bold'>{author}</div>
                    <time className='text-sm text-white/70'>{dayjs(date).format('DD.MM HH:mm')}</time>
                    <div className="text-sm font-bold"></div>
                </div>
                <div className='mt-4'>{comment}</div>
            </div>
        </>
    )
}

export default CommentItem;