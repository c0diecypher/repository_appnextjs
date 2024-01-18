"use client"
import Back from "@/app/UI/BackButton/BackButton"
import initData from "@/app/UI/useInitData/initData"
import { useState } from "react"

const Subscription = () => {
	const [isVisible, setIsPopupVisible] = useState(false)
	const { WebApp } = initData()
	const showPopup = () => {
		WebApp.HapticFeedback.notificationOccurred('error');
		setIsPopupVisible(true)
		setTimeout(() => {
			setIsPopupVisible(false)
		}, 3000) // Закроется через 3 секунды, можно настроить
	}
	return (
		<>
			<Back />
			<div className="profile-data">
				<div
					className="subscription-container"
					style={{ border: "2px solid var(--tg-second)" }}
				>
					<div className="connect-classic">connect</div>
					<p className="connect-free">Бесплатно</p>
					<ul class="features-list">
						<li className="feature-item">Кэшбэк с покупки (1000 рублей)</li>
						<li className="feature-item">
							Лимит на списание бонусов (до 5990)
						</li>
					</ul>
				</div>
				<div
					class="subscription-container"
					style={{ border: "2px solid #7969dc", marginTop: "30px" }}
				>
					<div className="connect-plus">connect+</div>
					<p className="connect-plus-price">590 ₽ в месяц </p>
					<ul class="features-list">
						<li className="feature-item">Повышенный кэшбэк (+15%)</li>
						<li className="feature-item">
							Эксклюзивный доступ к новинкам и акциям
						</li>
						<li className="feature-item">
							Дополнительные предложения и скидки
						</li>
						<li className="feature-item">
							Лимит на списание бонусов (до 4990)
						</li>
					</ul>
					<button
						className="btn-profile-data-info btn-profile-data"
						onClick={showPopup}
					>
						Приобрести подписку
					</button>
				</div>
				<div className="subscription-container" style={{ marginTop: "30px" }}>
					<div className="connect-pro">connect pro</div>
					<p className="connect-pro-price">990 ₽ в месяц </p>
					<ul className="features-list">
						<li className="feature-item">Повышенный кэшбэк (+25%)</li>
						<li className="feature-item">
							Эксклюзивный доступ к новинкам и акциям
						</li>
						<li className="feature-item">
							Дополнительные предложения и скидки
						</li>
						<li className="feature-item">
							Лимит на списание бонусов (до 3990)
						</li>
					</ul>
					<button
						className="btn-profile-data-info btn-profile-data"
						onClick={showPopup}
					>
						Приобрести подписку
					</button>
					<div className={`popup-container ${isVisible ? "show" : ""}`}>
						<svg
							xmlns="http://www.w3.org/2000/svg"
							width="20"
							height="20"
							viewBox="0 0 28 28"
							fill="none"
						>
							<path
								fill-rule="evenodd"
								clip-rule="evenodd"
								d="M12.7801 3.25936C11.8896 3.65583 11.2075 4.83722 9.84336 7.2L3.43476 18.3C2.07061 20.6628 1.38854 21.8442 1.49043 22.8136C1.5793 23.6592 2.02279 24.4273 2.71064 24.9271C3.49924 25.5 4.86338 25.5 7.59168 25.5H20.4089C23.1372 25.5 24.5013 25.5 25.2899 24.9271C25.9778 24.4273 26.4212 23.6592 26.5101 22.8136C26.612 21.8442 25.9299 20.6628 24.5658 18.3L18.1572 7.2C16.793 4.83722 16.111 3.65583 15.2205 3.25936C14.4438 2.91355 13.5568 2.91355 12.7801 3.25936ZM15.0813 10.5998L14.9674 17.0501C14.9581 17.5774 14.528 18 14.0007 18C13.4733 18 13.0432 17.5774 13.0339 17.0501L12.9201 10.5998C12.9094 9.99557 13.3963 9.5 14.0007 9.5C14.605 9.5 15.0919 9.99558 15.0813 10.5998ZM15.2503 20.5C15.2503 21.1904 14.6906 21.75 14.0003 21.75C13.3099 21.75 12.7503 21.1904 12.7503 20.5C12.7503 19.8096 13.3099 19.25 14.0003 19.25C14.6906 19.25 15.2503 19.8096 15.2503 20.5Z"
								fill="var(--tg-text)"
							/>
						</svg>
						<p>В текущее время покупка недоступна</p>
					</div>
				</div>
			</div>
		</>
	)
}

export default Subscription