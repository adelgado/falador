export default function loggerMiddleware(store: any): any {
	return (next: Function) => (action: any) => {
		console.log(action)
		return next(action)
	}
}
