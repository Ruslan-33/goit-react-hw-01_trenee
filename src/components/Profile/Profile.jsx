// name — ім'я користувача
// tag — тег в соціальній мережі без @
// location — місто і країна
// image — посилання на зображення
// stats — об'єкт з інформацією про активності

// name, tag, location, image, stats


export default function Profile({ Profile }) {
    console.log(Profile);
    return (
        <div>
            <div>
                <img
                    src="https://cdn-icons-png.flaticon.com/512/1077/1077012.png"
                    alt="User avatar"
                />
                <p>Petra Marica</p>
                <p>@pmarica</p>
                <p>Salvador, Brasil</p>
            </div>
            <ul>
                <li>
                    <span>Followers</span>
                    <span>1000</span>
                </li>
                <li>
                    <span>Views</span>
                    <span>2000</span>
                </li>
                <li>
                    <span>Likes</span>
                    <span>3000</span>
                </li>
            </ul>
        </div>
    )
}
