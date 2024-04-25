export default function OfficerProfile(props) {
    console.log("props: ", props);
    return (
        <div>
            <p>Name: { props.name }</p>
            <p>Specialization: </p>
        </div>
    );
}