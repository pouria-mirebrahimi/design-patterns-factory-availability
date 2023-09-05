import { DiaryStatus, DiaryType } from '../enum/diary.enum';
import { DiaryList } from '../interface/datetime.interface';
import { IDate, ITime } from '../interface/datetime.interface';
import { IDiary } from '../interface/diary.interface';
import { InitDataOnceAvailability } from '../interface/diary.interface';
import { Operation } from '../interface/operation.interface';

export class OnceDiary implements IDiary {
  readonly type: DiaryType = DiaryType.ONCE;
  public diaries: DiaryList = [];

  #status_: DiaryStatus;
  #date_: IDate[];
  #time_: ITime;

  #dateTimes_: DiaryList;

  execute(operation: Operation): void {
    operation.apply(this);
  }

  fill(data: InitDataOnceAvailability): void {
    const { status, dates, time } = data;
    this.#status_ = status;
    this.#date_ = dates;
    this.#time_ = time;
  }

  public set momentDates(values: DiaryList) {
    this.#dateTimes_ = values;
  }

  public get momentDates(): DiaryList {
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
