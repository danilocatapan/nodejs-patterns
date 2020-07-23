import { LogStrategy } from '../analytics/log-strategy';
import { LoginView } from '../presentation/login-view'
import { ActionLog } from '../analytics/action-log'
import { ErrorLog } from '../analytics/error-log'
import { ScreenLog } from '../analytics/screen-log'
import { SentryAdapter } from '../infra/sentry-adapter'
import { FirebaseAdapter } from '../infra/firebase-adapter'
import { ErrorAnalyticsComposite } from '../infra/error-analytics-composite';
import { LogglyAdapter } from '../infra/loggly-adapter';
import { MongoAnalyticsRepository } from '../infra/mongo-analytics-repo';

export const makeLoginView = (): LoginView => {
  const errorAnalyticsComposite = new ErrorAnalyticsComposite([
    new SentryAdapter(),
    new LogglyAdapter(),
    new MongoAnalyticsRepository()
  ])
  const firebaseAdapter = new FirebaseAdapter()
  const actionLog = new ActionLog(firebaseAdapter)
  const errorLog = new ErrorLog(errorAnalyticsComposite)
  const screenLog = new ScreenLog(firebaseAdapter)
  const logStrategy = new LogStrategy(actionLog, errorLog, screenLog)
  return new LoginView(logStrategy)
}