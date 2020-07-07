import React from "react";
import { MDBContainer, MDBRow, MDBCol } from "mdbreact";
import Lightbox from "react-image-lightbox";
import "./LightBox.css";

class LightBox extends React.Component {
state = {
  photoIndex: 0,
  isOpen: false,
  images: [
    'https://imgur.com/0y3GBBv.jpeg',
    'https://imgur.com/1sICWzW.jpeg',
    'https://db3pap003files.storage.live.com/y4mveeXgsmE151pkja5-IOsiXU4asqoeFwBXzNpJIkZM0bywXXJ_-UtluObpqnvHmXokJiw-A-7gHRpWYt4-jTI5R-5SyQXVC9lyCanFp3nknhIWT9vEond_DKnAgY_eLF1H4LadKrpqGy52xgV2ZM5CUQ7NfL2tIjkHw1OmmouhhlADH12mUCHKI0gVXoUU_YyXRn_eQyQYg2zsdUkNgsgmg/biroreinigung.JPG?psid=1&width=1271&height=847'
  ]
}

renderImages = () => {
  let photoIndex = -1;
  const { images } = this.state;

return images.map(imageSrc => {
  photoIndex++;
  const privateKey = photoIndex;
  return (
    <MDBCol md="4" key={photoIndex}>
      <figure>
        <img src={imageSrc} alt="Gallery" style={{height: '350px'}} className="img-fluid" onClick={()=>
        this.setState({ photoIndex: privateKey, isOpen: true })
        }
        />
      </figure>
    </MDBCol>
    );
  })
}

render() {
const { photoIndex, isOpen, images } = this.state;
  return (
      <MDBContainer className="mt-5">
        <div className="mdb-lightbox">
          <MDBRow>
            {this.renderImages()}
          </MDBRow>
        </div>
        {isOpen && (
        <Lightbox
          mainSrc={images[photoIndex]}
          nextSrc={images[(photoIndex + 1) % images.length]}
          prevSrc={images[(photoIndex + images.length - 1) % images.length]}
          imageTitle={photoIndex + 1 + "/" + images.length}
          onCloseRequest={() => this.setState({ isOpen: false })}
          onMovePrevRequest={() =>
            this.setState({
              photoIndex: (photoIndex + images.length - 1) % images.length
            })
          }
          onMoveNextRequest={() =>
            this.setState({
              photoIndex: (photoIndex + 1) % images.length
            })
            }
          />
        )}
      </MDBContainer>
    );
  }
}

export default LightBox;
