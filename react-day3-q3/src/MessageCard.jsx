function MessageCard(props) {
  return (
    <div>
      <h2>Title:{props.title}</h2>
      <p>Message:{props.message}</p>
    </div>
  );
}
export default MessageCard;