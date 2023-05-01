export default function authMiddleware(req, res, next){
    console.log('is autenticated')
    next() ;
}
