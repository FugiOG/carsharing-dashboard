const ToastMsg = (msg: string, title: string = '') => {
	return (
		<div>
			<h4 style={{ color: '#000', opacity: 0.7 }}>{title}</h4>
			<p style={{ fontSize: '18px' }}>{msg}</p>
		</div>
	)
}

export default ToastMsg
