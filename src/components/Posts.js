import React from 'react'

const Posts = props => {
    const { post } = props
    return(
        <div>
            {post.map(post => {
                return(
                    <div key={post.id} className='card mb-4'>
                        <div className='card-header'>
                            By: Admin
                        </div>
                        <div className="card-body">
                            <h5 className="card-title">{post.title}</h5>
                            <p className="card-text">{post.body}</p>
                        </div>
                    </div >
                )
            })}
        </div>
    )
}
export default Posts