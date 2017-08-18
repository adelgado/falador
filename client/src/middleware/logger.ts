export default function loggerMiddleware(store: any): any {
	return (next: (action: any) => void) => (action: any) => {
		console.log(action)
		return next(action)
	}
}
