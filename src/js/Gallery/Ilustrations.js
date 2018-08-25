import React from 'react';
import Gallery from 'react-photo-gallery';
import Lightbox from 'react-images';

const photos = [
  { src: 'http://www.aliciamarsans.com/webAMarsans/images/transfertjuin/ilustracionesdessinsoriginal/2.jpg', width: 4, height: 3 },
  { src: 'http://www.aliciamarsans.com/webAMarsans/images/transfertjuin/ilustracionesdessinsoriginal/3.jpg', width: 1, height: 1 },
  { src: 'http://www.aliciamarsans.com/webAMarsans/images/transfertjuin/ilustracionesdessinsoriginal/4.jpg', width: 3, height: 4 },
  { src: 'http://www.aliciamarsans.com/webAMarsans/images/transfertjuin/ilustracionesdessinsoriginal/5.jpg', width: 3, height: 4 },
  { src: 'http://www.aliciamarsans.com/webAMarsans/images/transfertjuin/ilustracionesdessinsoriginal/6.jpg', width: 3, height: 4 },
  { src: 'http://www.aliciamarsans.com/webAMarsans/images/transfertjuin/ilustracionesdessinsoriginal/7.jpg', width: 4, height: 3 },
  { src: 'http://www.aliciamarsans.com/webAMarsans/images/transfertjuin/ilustracionesdessinsoriginal/8.jpg', width: 3, height: 4 },
  { src: 'http://www.aliciamarsans.com/webAMarsans/images/transfertjuin/ilustracionesdessinsoriginal/9.jpg', width: 4, height: 3 },
  { src: 'http://www.aliciamarsans.com/webAMarsans/images/transfertjuin/ilustracionesdessinsoriginal/10.jpg', width: 4, height: 3 }
];


class Ilustrations extends React.Component {
  constructor() {
    super();
    this.state = { currentImage: 0 };
    this.closeLightbox = this.closeLightbox.bind(this);
    this.openLightbox = this.openLightbox.bind(this);
    this.gotoNext = this.gotoNext.bind(this);
    this.gotoPrevious = this.gotoPrevious.bind(this);
  }
  openLightbox(event, obj) {
    this.setState({
      currentImage: obj.index,
      lightboxIsOpen: true,
    });
  }
  closeLightbox() {
    this.setState({
      currentImage: 0,
      lightboxIsOpen: false,
    });
  }
  gotoPrevious() {
    this.setState({
      currentImage: this.state.currentImage - 1,
    });
  }
  gotoNext() {
    this.setState({
      currentImage: this.state.currentImage + 1,
    });
  }
  render() {
    return (
      <div className="image-container col-12">
        <Gallery photos={photos} onClick={this.openLightbox} />
        <Lightbox images={photos}
          onClose={this.closeLightbox}
          onClickPrev={this.gotoPrevious}
          onClickNext={this.gotoNext}
          currentImage={this.state.currentImage}
          isOpen={this.state.lightboxIsOpen}
        />
      </div>
    )
  }
}
export default Ilustrations;