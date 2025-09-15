function NotFound() {
    return <div>404 Not Found
        <button onClick={() => navigate('/posts')}>Back</button>
    </div>
}
export default NotFound;