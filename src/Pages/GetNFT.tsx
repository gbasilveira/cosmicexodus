import { useParams } from "react-router-dom";

const GetNFT = () => {
    const {game, type, id} = useParams();

    return <>
        <h1>Get NFT</h1>
        <p>Game: {game}</p>
        <p>Type: {type}</p>
        <p>ID: {id}</p>

        <AuthenticateWeb3Wallet />
        <NFTSummaryWidget />
        <GetNFTButton />

        

    </>;
};

export default GetNFT;