import {ParamListBase, RouteProp} from '@react-navigation/native';
import {useMemo} from 'react';

function useParamsRoute<T = any>(route: RouteProp<ParamListBase, string>) {
  const params = useMemo(() => route.params, [route]) as Readonly<T | undefined>;
  return params;
}

export default useParamsRoute;
