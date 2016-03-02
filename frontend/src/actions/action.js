export const RECEIVE_USER_PROFILE = 'RECEIVE_USER_PROFILE';
export function receiveEsteem (json) {
    return {
        type: RECEIVE_USER_PROFILE,
        user_profile: json.user_profile
    }
}