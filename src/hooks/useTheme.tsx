import { useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { changeTheme } from '../store/slices/theme-slice';
import { RootState } from '../store/store';

export const useTheme = () => {
  const dispatch = useDispatch();
  const theme = useSelector((state: RootState) => state.theme.value);
  const themeChanger = useCallback(() => {
    dispatch(changeTheme());
  }, [dispatch]);

  return { theme, themeChanger };
};
