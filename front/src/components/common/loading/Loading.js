import { LoadingBlock } from "./LoadingStyle";

function Loading() {
  return (
    <LoadingBlock>
      <img src="./loadingImage.gif" alt="spinner" />
      <p>Loading ...</p>
    </LoadingBlock>
  );
}

export default Loading;
