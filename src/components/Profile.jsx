import Avatar from "./Avatar";

export default function Profile(props) {
  return (
    <Card>
      <Avatar {...props} />
    </Card>
  )
}

function Card({children}) {
  return (
    <div className="card">
      {children}
    </div>
  )
}