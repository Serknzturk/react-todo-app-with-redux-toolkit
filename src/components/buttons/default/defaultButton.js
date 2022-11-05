export default function DefaultButton(props) {
	return (

		<button type="button">{props?.children || ''}</button>

	)
}