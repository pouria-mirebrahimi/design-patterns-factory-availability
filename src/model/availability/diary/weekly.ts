import { DiaryStatus, DiaryType } from '../enum/diary.enum';
import { IDate, IDateTime, ITime } from '../interface/datetime.interface';
import { InitDataWeeklyAvailability } from '../interface/diary.interface';
import { IDiary } from '../interface/diary.interface';
import { Operation } from '../interface/operation.interface';

export class WeeklyDiary implements IDiary {
  type: DiaryType = DiaryType.WEEKLY;
  public diaries: IDateTime[];

  #status_: DiaryStatus;
  #date_: IDate[];
  #time_: ITime;

  #dateTimes_: moment.Moment[];

  execute(operation: Operation): void {
    operation.apply(this);
  }

  fill(data: InitDataWeeklyAvailability) {
    const { status, dates, time } = data;
    this.#status_ = status;
    this.#date_ = dates;
    this.#time_ = time;
  }
  public set momentDates(values: moment.Moment[]) {
    this.#dateTimes_ = values;
  }

  public get momentDates(): moment.Moment[] {
    return this.#dateTimes_;
  }

  public get status(): DiaryStatus {
    return this.#status_;
  }

  public get rawDates(): IDate[] {
    return this.#date_;
  }

  public get rawTimes(): ITime {
    return this.#time_;
  }
}
