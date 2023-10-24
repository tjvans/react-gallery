import Avatar from "./Avatar";
import Bio from "./Bio";

export default function Profile(props) {
  return (
    <Card>
      <Avatar {...props} />
      <Bio {...props} />
    </Card>
  );
}

function Card({ children }) {
  return <div className="card">{children}</div>;
}
