import { IComment } from "@/app/interfaces"
import { Card, Typography } from "@mui/material"
import { FC } from "react"

interface Props {
    comment: IComment
}

export const Comment: FC <Props> = ({comment}) => {
  return (
    <>
    <Card sx={{marginBottom: 2, padding: '0 10px 0 10px', border: '1px solid', height: 70}}>
    <Typography color={'blue'}>{comment.user} <small style={{color: 'grey'}}>{comment.date}</small></Typography>
    <Typography fontStyle={'italic'} color={'#363332'} >{comment.comment}</Typography>
    </Card>

    </>
  )
}
