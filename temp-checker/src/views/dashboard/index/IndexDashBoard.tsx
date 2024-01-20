import React, { useEffect } from "react";
import { APP_CONTENTS } from "../../../utils/constant";
import CardState from "./CardState";
import { bellIcon, humidtyIcon, temperatureIcon } from "../../../assets";
import Chart from "../chart/Chart";
import {
  EngineValue,
  HumidityDataType,
  RootState,
  TemperatureDataType,
} from "../../../utils/types";
import { AppDispatch } from "../../../store";
import { useDispatch, useSelector } from "react-redux";
import { getOtherUserData } from "../../../features/otherUserData.slice";
import CircularLoading from "../../../components/CircularLoading";
import { isAfter } from "date-fns";

const dataHumidity: HumidityDataType[] = [
  { time: "00:00", humidity: 20 },
  { time: "03:00", humidity: 22 },
  { time: "06:00", humidity: 25 },
  { time: "09:00", humidity: 28 },
  { time: "12:00", humidity: 30 },
  { time: "15:00", humidity: 26 },
  { time: "18:00", humidity: 24 },
  { time: "21:00", humidity: 22 },
];

const IndexDashBoard: React.FC = () => {
  const firstName: string | undefined = useSelector(
    (state: RootState) => state.otherUserData.otherUserData?.firstName
  );
  const valuesEngine: EngineValue[] | undefined = useSelector(
    (state: RootState) => state.otherUserData.otherUserData?.valuesEngine
  );
  const dispatch: AppDispatch = useDispatch();
  const userEmail: string = useSelector(
    (state: RootState) => state.user.user!.email
  );
  const isLoading: boolean = useSelector(
    (state: RootState) => state.otherUserData.isLoading
  );

  useEffect(() => {
    dispatch(getOtherUserData(userEmail));
  }, [dispatch, userEmail]);

  const filterByType = (type: string, values: EngineValue[]) => {
    return values
      .filter((value) => value.type === type)
      .sort((a, b) => {
        if (isAfter(a.create_date, b.create_date)) return -1;
        return 1;
      });
  };

  const getLastTemp = () => {
    const temps = filterByType("temperature", valuesEngine!);

    return temps[0].value.toFixed(2);
  };

  const getLastHumidity = () => {
    const humidities = filterByType("humidity", valuesEngine!);

    return humidities[0].value.toFixed(2);
  };

  const getHistory = (type: string) => {
    const temps = filterByType(type, valuesEngine!).sort((a, b) => {
      if (isAfter(a.create_date, b.create_date)) return 1;

      return -1;
    });
    let history = [];

    history = temps.map((temp) => {
      const convertDate = new Date(temp.create_date);
      console.log(`${convertDate.getHours()}:${convertDate.getMinutes()}`);

      return {
        [type]: temp.value,
        time: `${convertDate.getHours()}:${convertDate.getMinutes()}`,
      };
    });

    return history;
  };

  return (
    <>
      {isLoading ? (
        <div className="w-full h-full flex items-center justify-center">
          <CircularLoading />
        </div>
      ) : (
        <div className="font-poppins p-[57px]">
          <h2 className="font-bold text-[20px] text-[#464255] mb-1">
            {APP_CONTENTS.dashBoardLabel}
          </h2>
          <p className="text-[#464255] font-medium">
            {APP_CONTENTS.hiLabel} {firstName?.charAt(0).toUpperCase()}
            {firstName?.substring(1)}.{" "}
            {APP_CONTENTS.welcomeBackOnDashBoardLabel}
          </p>
          <div className="grid md:grid-cols-3 gap-[20px] mt-[40px]">
            <CardState
              icon={temperatureIcon}
              label={APP_CONTENTS.temperatureLabel + " (°)"}
              value={
                !valuesEngine || valuesEngine.length == 0 ? "0" : getLastTemp()
              }
            />
            <CardState
              icon={humidtyIcon}
              label={APP_CONTENTS.humidityLabel}
              value={
                !valuesEngine || valuesEngine.length == 0
                  ? "0"
                  : getLastHumidity()
              }
            />
            <CardState
              icon={bellIcon}
              label={APP_CONTENTS.alerteLabel}
              value={"5"}
            />
          </div>
          <div className="mt-[40px] md:grid md:grid-cols-2 md:gap-4">
            <Chart
              dataKey="temperature"
              data={
                !valuesEngine || valuesEngine?.length == 0
                  ? []
                  : getHistory("temperature")
              }
            />
            <Chart
              dataKey="humidity"
              data={
                !valuesEngine || valuesEngine?.length == 0
                  ? []
                  : getHistory("humidity")
              }
            />
          </div>
        </div>
      )}
    </>
  );
};

export default IndexDashBoard;
