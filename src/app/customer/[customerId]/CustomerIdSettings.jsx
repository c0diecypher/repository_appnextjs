import { useEffect } from "react"
import useSWR from "swr"
const fetcher = (url) => fetch(url).then((res) => res.json())

export const revalidate = 0
export default function CustomerIdSettings({ userId, form, onDataChange }) {
	const { data, error } = useSWR(`/api/customer/settings/${userId}`, fetcher)
	useEffect(() => {
		if (data) {
			onDataChange(data)
		}
	}, [data, onDataChange])

	return (
		<>
			<div className="profile-data-title">Данные доставки</div>
			<div className="profile-data-info">
				<span style={{ textAlign: "left" }}>ФИО</span>
				<span style={{ textAlign: "right" }}>
					{form?.userFio || data?.userFio || "Не указан"}
				</span>
			</div>
			<div className="profile-data-info">
				<span style={{ textAlign: "left" }}>Адрес доставки</span>
				<span style={{ textAlign: "right" }}>
					{form?.userAdress || data?.userAdress || "Не указан"}
				</span>
			</div>
			<div className="profile-data-info">
				<span style={{ textAlign: "left" }}>Город</span>
				<span style={{ textAlign: "right" }}>
					{form?.userCity || data?.userCity || "Не указан"}
				</span>
			</div>
			<div className="profile-data-info">
				<span style={{ textAlign: "left" }}>Телефон</span>
				<span style={{ textAlign: "right" }}>
					{form?.phoneNumber || data?.phoneNumber || "Не указан"}
				</span>
			</div>
		</>
	)
}
