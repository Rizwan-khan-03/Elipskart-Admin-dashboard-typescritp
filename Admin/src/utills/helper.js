import { useAppSelector } from '../App/Redux/hooks';
const user = useAppSelector(state => state?.commonDataSlice?.user)

export const getUserId = () => {
return user?._id
}