import React from 'react';
import './imagePicker.scss';

export class ImagePicker extends React.Component {
        public state = {
            data: '',
            fullScreen: false,
            loading: false
        };

    render() {
        const {data, fullScreen, loading} = this.state;
        const backgroundImage = data ? {backgroundImage: `url(${ImageData})`} : null;
        const previewClasses = ['preview', fullScreen ? 'preview--fullscreen' : ''].join(' ');


        return (
            <div>

                <input
                    id="car"
                    type="file"
                    accept="image/*"
                    capture="camera"
                    onChange={this.handleFileChange}
                />

                <div
                    className={previewClasses}
                    onClick={this.handlePreviewClick}
                >
                    {!data && !loading &&
                    <label htmlFor="car">
                        Click to capture
                    </label>
                    }

                    {loading &&
                    <span>Loading...</span>
                    }
                </div>

                <button type='button' onClick={this.handleClearClick}>
                    Clear Image
                </button>

            </div>
        );
    }
    private handleFileChange(event: React.ChangeEvent<HTMLInputElement>) {
        const {target} = event;
        const {files} = target;

        if (files && files[0]) {
            var reader = new FileReader();

            reader.onloadstart = () => this.setState({loading: true});

            reader.onload = event => {
                 this.setState({

                    // data: event.target.result,
                    loading: false
                });
            };

            reader.readAsDataURL(files[0]);
        }
    }

    private handleClearClick() {
        this.setState({
            data: null,
            fullScreen: false
        });
    }

    private handlePreviewClick() {
        const {data, fullScreen} = this.state;

        if (!data) {
            return;
        }

        this.setState({fullScreen: !fullScreen});
    }
}
