import * as React from 'react'

export const Error = ({
	message,
	onRetry
}: {
	message: string
	onRetry: () => void
}): JSX.Element =>
	<div>
		<p>There's been an error.</p>
		<pre>
			{message}
		</pre>
		<button onClick={onRetry}>Retry</button>
	</div>
