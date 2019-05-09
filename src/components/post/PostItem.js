import React, { Component } from 'react';
import { inject, observer } from 'mobx-react';

@inject('post')
@observer
class PostItem extends Component {
  render() {
    // const { post } = this.props;
    // console.log(post.postValue);
    return <div>PostItem</div>;
  }
}

export default PostItem;
