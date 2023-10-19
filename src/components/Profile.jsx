import Avatar from "./Avatar";

export default function Profile(props) {
<<<<<<< HEAD
  return (
    <Card>
      <Avatar {...props} />
    </Card>
  )
=======
  return <Avatar {...props} />;
>>>>>>> refs/remotes/origin/main
}

function Card({children}) {
  return (
    <div className="card">
      {children}
    </div>
  )
}