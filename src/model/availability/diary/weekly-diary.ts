import { DiaryStatus, DiaryType } from '../enum/diary.enum';
import { IDate, IDateTime, ITime } from '../interface/datetime.interface';
import { InitDataWeeklyAvailability } from '../interface/diary.interface';
import { IDiary } from '../interface/diary.interface';
import { Operation } from '../interface/operation.interface';

export class WeeklyDiary implements IDiary {
  type: DiaryType = DiaryType.WEEKLY;
  details: IDateTime[];

  public status: DiaryStatus;
  public startDate: IDate;
  public endDate: IDate;
  public time: ITime;

  execute(operation: Operation): void {
    operation.apply(this);
  }

  fill(data: InitDataWeeklyAvailability) {
    const { status, dates, time } = data;
    this.status = status;
    this.startDate = dates[0];
    this.endDate = dates[1];
    this.time = time;
  }
}
