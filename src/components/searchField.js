import React from 'react';
import loader from './../assets/images/fancybox_loading.gif';

const load = 
    <span className="pull-right">
        Loading...
        <img style={{ border: '1px solid #fff' }} src={loader} alt="loading..." width={20} height={20}/>
    </span>

export const SearchField = (props) => {
    return (
        <div className="row">
            <div className="col-md-12">
                <form className="form-horizontal" onSubmit={props.onSubmit}>
                    <div className="form-group">
                        <div className="col-md-10">
                            <input type="text"
                                name="giphy-search"
                                className="form-control"
                                placeholder="type your search here"
                                onChange={props.onInputChange}
                            />
                        </div>
                        <div className="col-md-2">
                            { props.loading ? load : <button type="submit" className="btn btn-default pull-right" disabled={props.loading}>Search</button> }
                        </div>
                    </div>
                </form>
            </div>
        </div>
    );
}