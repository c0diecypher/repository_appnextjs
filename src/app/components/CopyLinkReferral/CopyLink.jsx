import React from "react"

const CopyLink = ({ isCopied, userId, handleCopyClick }) => {
	return (
		<>
			<div className="referral-refer-friends-referraluser">
				<div className="referral-footer">
					<div className="referral-icon">
						<svg
							viewBox="0 0 20 20"
							fill="none"
							xmlns="http://www.w3.org/2000/svg"
						>
							<path
								d="M10 20c5.523 0 10-4.477 10-10S15.523 0 10 0 0 4.477 0 10s4.477 10 10 10Z"
								fill="currentColor"
							></path>
							<path
								d="M3.507 10.426c1.174-.642 2.485-1.178 3.71-1.716a194.018 194.018 0 0 1 6.362-2.556c.415-.137 1.162-.272 1.236.34-.04.865-.205 1.726-.319 2.586-.287 1.892-.619 3.778-.943 5.663-.111.629-.905.954-1.412.552-1.22-.818-2.449-1.627-3.653-2.463-.394-.398-.028-.969.324-1.253 1.004-.982 2.07-1.816 3.022-2.85.257-.615-.502-.096-.752.063-1.376.94-2.717 1.938-4.167 2.764-.74.404-1.604.059-2.344-.167-.664-.273-1.637-.547-1.064-.963Z"
								fill="#fff"
							></path>
						</svg>
					</div>
					<div className="referral-points-text">worldstuffru_bot/{userId}</div>
					<div className="referral-point" onClick={handleCopyClick}>
						{isCopied ? (
							<>
								<svg
									fill="none"
									height="20"
									viewBox="0 0 24 24"
									width="20"
									xmlns="http://www.w3.org/2000/svg"
								>
									<path
										d="M6.25 3C4.45507 3 3 4.45507 3 6.25V12.25C3 14.0449 4.45507 15.5 6.25 15.5H7.5V14H6.25C5.2835 14 4.5 13.2165 4.5 12.25V6.25C4.5 5.2835 5.2835 4.5 6.25 4.5H12.25C13.2165 4.5 14 5.2835 14 6.25V12.25C14 13.2165 13.2165 14 12.25 14H11V15.5H12.25C14.0449 15.5 15.5 14.0449 15.5 12.25V6.25C15.5 4.45507 14.0449 3 12.25 3H6.25Z"
										fill="#7969dc"
									/>
									<path
										d="M10 11.75C10 10.7835 10.7835 10 11.75 10H12.9982V8.5H11.75C9.95507 8.5 8.5 9.95507 8.5 11.75V17.75C8.5 19.5449 9.95507 21 11.75 21H17.75C19.5449 21 21 19.5449 21 17.75V11.75C21 9.95507 19.5449 8.5 17.75 8.5H16.5V10H17.75C18.7165 10 19.5 10.7835 19.5 11.75V17.75C19.5 18.7165 18.7165 19.5 17.75 19.5H11.75C10.7835 19.5 10 18.7165 10 17.75V11.75Z"
										fill="#7969dc"
									/>
								</svg>
							</>
						) : (
							<>
								<svg
									fill="none"
									height="20"
									viewBox="0 0 24 24"
									width="20"
									xmlns="http://www.w3.org/2000/svg"
								>
									<path
										d="M6.25 3C4.45507 3 3 4.45507 3 6.25V12.25C3 14.0449 4.45507 15.5 6.25 15.5H7.5V14H6.25C5.2835 14 4.5 13.2165 4.5 12.25V6.25C4.5 5.2835 5.2835 4.5 6.25 4.5H12.25C13.2165 4.5 14 5.2835 14 6.25V12.25C14 13.2165 13.2165 14 12.25 14H11V15.5H12.25C14.0449 15.5 15.5 14.0449 15.5 12.25V6.25C15.5 4.45507 14.0449 3 12.25 3H6.25Z"
										fill="var(--tg-text)"
									/>
									<path
										d="M10 11.75C10 10.7835 10.7835 10 11.75 10H12.9982V8.5H11.75C9.95507 8.5 8.5 9.95507 8.5 11.75V17.75C8.5 19.5449 9.95507 21 11.75 21H17.75C19.5449 21 21 19.5449 21 17.75V11.75C21 9.95507 19.5449 8.5 17.75 8.5H16.5V10H17.75C18.7165 10 19.5 10.7835 19.5 11.75V17.75C19.5 18.7165 18.7165 19.5 17.75 19.5H11.75C10.7835 19.5 10 18.7165 10 17.75V11.75Z"
										fill="var(--tg-text)"
									/>
								</svg>
							</>
						)}
					</div>
				</div>
			</div>
		</>
	)
}

export default CopyLink
