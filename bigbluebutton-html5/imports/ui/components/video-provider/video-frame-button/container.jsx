import React from 'react';
import { withTracker } from 'meteor/react-meteor-data';
import { injectIntl } from 'react-intl';
import { withModalMounter } from '/imports/ui/components/modal/service';
import VideoService from '../service';
import JoinVideoFrameButton from "./component";
import VideoFramePreviewContainer from "../../video-frame-preview/container";

const JoinVideoFrameOptionsContainer = (props) => {
    const {
        hasVideoStream,
        disableReason,
        intl,
        mountModal,
        ...restProps
    } = props;

    const mountVideoPreview = () => { mountModal(<VideoFramePreviewContainer fromInterface />); };

    return (
        <JoinVideoFrameButton {...{
            mountVideoPreview, hasVideoStream, disableReason, ...restProps,
        }}
        />
    );
};

export default withModalMounter(injectIntl(withTracker(() => ({
    hasVideoStream: VideoService.hasVideoStream(),
    disableReason: VideoService.disableReason(),
}))(JoinVideoFrameOptionsContainer)));
