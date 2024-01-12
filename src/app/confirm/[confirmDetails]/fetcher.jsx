import useSWR from "swr"
import axios from 'axios'
 
const fetcher = url => axios.get(url).then(res => res.data)

export default function CustomerStatus({ userId, orderId }) {
    const customer = {
        userId,
        order_id: orderId,
    }
	const { data, error } = useSWR('https://crm.zipperconnect.space/get/paymen', customer, fetcher)

	if (error) return "Произошла ошибка."
	if (!data) return "Загрузка..."

	return (
		<div>
			<h1>TEST SWR</h1>
			<strong>👁 {data.status}</strong>{" "}
		</div>
	)
}
