import { FC } from 'react'

interface Props {
  className: string
  title: string
  date: string
  content: string
}

const Card: FC<Props> = ({
  className,
  title,
  date,
  content
}) => {
  return (
    <div className={`card card-bordered${className ? ` ${className}` : ''}`}>
      <div className="card-body bg-body">
        <h2 className="card-title text-background flex items-center justify-start">
          <span>{title}</span>
          <div className="badge mx-2 py-4 px-3 bg-primary">{date}</div>
        </h2>
        <p className="text-background">
          {content}
        </p>
      </div>
    </div>
  )
}

export default Card