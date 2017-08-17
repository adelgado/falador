export default function loggerMiddleware(store: any): any {
	return next => action => {
		console.log(action)
		return next(action)
	}
}
