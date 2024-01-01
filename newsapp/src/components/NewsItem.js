import React, { Component } from 'react'

export class NewsItem extends Component {



    render() {
        let { title, description, imageUrl, newsUrl, author, date, source } = this.props;
        return (
            <div className='my-3'>
                <div className="card">
                    <div style={{ display: "flex", justifyContent: "flex-end", position: "absolute", right: "0" }}>

                        <span className="badge rounded-pill bg-danger" >
                            {source}
                            <span className="visually-hidden">unread messages</span>
                        </span>
                    </div>
                    <img src={!imageUrl ? "https://dummyimage.com/640x360/fff/aaa" : imageUrl} className="card-img-top" alt="..." />
                    <div className="card-body">
                        <h5 className="card-title">{title}</h5>
                        <p className="card-text">{description}</p>
                        <div className="card-footer">
                            <small className="text-body-secondary">By {!author ? "unknown" : author} on {new Date(date).toGMTString()}</small>
                        </div>
                        <div className="text-center">
                            <a rel="noreferrer" href={newsUrl} target="_blank" className="btn btn-sm btn-dark my-3">Read More</a>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default NewsItem