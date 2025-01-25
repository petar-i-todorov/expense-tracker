import "./card.css";

type CardProps = React.PropsWithChildren<{ title: string }>

export function Card({ title, children }: CardProps) {
    return <div className="card">
        <h2>{title}</h2>
        <div className="card-content">
            {children}
        </div>
    </div>
}