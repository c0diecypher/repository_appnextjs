"use client"

import Image from "next/image"
import Link from "next/link"
import { useRouter } from "next/navigation"
import ProductListImage from "./ProductListImage"
export const revalidate = 0
const ProductBasketList = ({ data }) => {

	const handleDelete = async (item, order_id) => {}
	const basketItems = data.basket.map((item, index) => (
		<div key={item.order_id} className="product-container-order">
			<div className="product-swiper">
				<Link
					href={`/order/id=${item.id}&name=${item.name}&ConfirmPrice=${item.price}&ConfirmSize=${item.size}&orderId=${item.order_id}`}
				>
					<div className="product-image-component">
						<div className="product-image-container">
							<div className="product-image-card">
								<div className="product-image-inner">
									<div className="product-image-inner-row">
										<ProductListImage item={item} />
									</div>
								</div>
							</div>
						</div>
					</div>

					<div className="product-details">
						<div className="product-price-and-datecreated">
							<div className="product-price-and-date">
								<span className="product-price">{item.price}</span>
								<span className="product-created">Создан: {item.time}</span>
							</div>
						</div>
						<div className="product-name">{item.name.toUpperCase()}</div>
						<span className="product-size">
							Размер: <b>{item.size}</b>
						</span>

						<span className="product-size">Оплатить</span>
					</div>
				</Link>
			</div>
			<button onClick={() => handleDelete(item.order_id)}>
				<svg
					xmlns="http://www.w3.org/2000/svg"
					width="36"
					height="36"
					viewBox="0 0 24 24"
					fill="none"
					stroke="currentColor"
					strokeWidth="2"
					strokeLinecap="round"
					strokeLinejoin="round"
					className="ai ai-Cross"
				>
					<path d="M20 20L4 4m16 0L4 20" />
				</svg>
			</button>
		</div>
	))

	return (
		<div className="product-block-order">
			<div className="product-order">
				Оплачивается	
			</div>
			<div className="product-container">{basketItems}</div>
		</div>
	)
}

export default ProductBasketList