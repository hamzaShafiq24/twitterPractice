import { check, request, requestMultiple, RESULTS, PERMISSIONS, checkMultiple } from 'react-native-permissions';
import { Platform } from 'react-native';
class PermissionsController {
  constructor() {
    const translatePermissionResult = (result, title = '') => {
      let granted = false;
      let message = '';
      switch (result) {
        case RESULTS.BLOCKED:
          message = `You blocked ${title}`;
          break;
        case RESULTS.DENIED:
          message = `${title} permission denied`;
          break;
        case RESULTS.GRANTED:
          message = `${title} permission granted`;
          granted = true;
          break;
        case RESULTS.LIMITED:
          message = `${title} permission limited`;
          break;
        case RESULTS.UNAVAILABLE:
          message = `${title} hardware unavailable or damaged`;
          granted = true;
          break;
        default:
          break;
      }
      return { granted, message };
    };

    const checkPhotoLibraryPermission = () => {
      return new Promise((resolve, reject) => {
        if (Platform.OS === 'android') {
          check(PERMISSIONS.ANDROID.WRITE_EXTERNAL_STORAGE)
            .then((result) => {
              let tResult = translatePermissionResult(result, 'External Storage');
              if (tResult.granted) {
                resolve(tResult.message);
              } else {
                reject(tResult.message);
              }
            })
            .catch((err) => {
              reject('Unable to check external storage permission');
            });
        } else {
          check(PERMISSIONS.IOS.PHOTO_LIBRARY)
            .then((result) => {
              let tResult = translatePermissionResult(result, 'Photo library');
              if (tResult.granted) {
                resolve(tResult.message);
              } else {
                reject(tResult.message);
              }
            })
            .catch((err) => {
              reject('Unable to check Photo library permission');
            });
        }
      });
    };
    const requestPhotoLibraryPermission = () => {
      return new Promise((resolve, reject) => {
        if (Platform.OS === 'android') {
          requestMultiple([
            PERMISSIONS.ANDROID.READ_EXTERNAL_STORAGE,
            PERMISSIONS.ANDROID.WRITE_EXTERNAL_STORAGE,
          ])
            .then((result) => {
              let t1Result = translatePermissionResult(
                result[PERMISSIONS.ANDROID.READ_EXTERNAL_STORAGE],
                'Read library'
              );
              let t2Result = translatePermissionResult(
                result[PERMISSIONS.ANDROID.WRITE_EXTERNAL_STORAGE],
                'Write to library'
              );

              if (t1Result.granted && t2Result.granted) {
                resolve(t1Result.message);
              } else {
                reject(`${t2Result.message}, ${t1Result.message}`);
              }
            })
            .catch((err) => {
              reject('Unable to request Library permissions');
            });
        } else {
          request(PERMISSIONS.IOS.PHOTO_LIBRARY)
            .then((result) => {
              let tResult = translatePermissionResult(result, 'Photo library');

              if (tResult.granted) {
                resolve(tResult.message);
              } else {
                reject(tResult.message);
              }
            })
            .catch((err) => {
              reject('Unable to request Photo library permission');
            });
        }
      });
    };



    const checkCameraPermission = () => {
      return new Promise((resolve, reject) => {
        if (Platform.OS === 'android') {
          check(PERMISSIONS.ANDROID.CAMERA)
            .then((result) => {
              let tResult = translatePermissionResult(result, 'Camera');
              if (tResult.granted) {
                resolve(tResult.message);
              } else {
                reject(tResult.message);
              }
            })
            .catch((err) => {
              reject('Unable to Check Camera Permission');
            });
        } else {
          check(PERMISSIONS.IOS.CAMERA)
            .then((result) => {
              let tResult = translatePermissionResult(result, 'Camera');
              if (tResult.granted) {
                resolve(tResult.message);
              } else {
                reject(tResult.message);
              }
            })
            .catch((err) => {
              reject('Unable to Check Camera Permission');
            });
        }
      });
    };


  

    const checkLocationPermission = () => {
      return new Promise((resolve, reject) => {
        if (Platform.OS === 'android') {
          checkMultiple([PERMISSIONS.ANDROID.ACCESS_FINE_LOCATION, PERMISSIONS.ANDROID.ACCESS_COARSE_LOCATION])
            .then((results) => {
              let corsRes = translatePermissionResult(results[PERMISSIONS.ANDROID.ACCESS_COARSE_LOCATION].granted, 'Cors Location');
              let fineRes = translatePermissionResult(results[PERMISSIONS.ANDROID.ACCESS_FINE_LOCATION].granted, 'Fine Location');
              if(corsRes.granted && fineRes.granted){
                 resolve(`Already have location permission`);
              }else{
                reject(`${corsRes.message} ${fineRes.granted}`);
              }
            })
            .catch((err) => {
              reject('Unable to Check Camera Permission');
            });
        } else {
          check(PERMISSIONS.IOS.LOCATION_WHEN_IN_USE)
            .then((result) => {
              let tResult = translatePermissionResult(result, 'Location');
              if (tResult.granted) {
                resolve(tResult.message);
              } else {
                reject(tResult.message);
              }
            })
            .catch((err) => {
              reject('Unable to Check Location Permission');
            });
        }
      });
    };


    const requestLocationPermission = () => {
      return new Promise((resolve, reject) => {
        if (Platform.OS === 'android') {
          requestMultiple([
            PERMISSIONS.ANDROID.ACCESS_FINE_LOCATION,
            PERMISSIONS.ANDROID.ACCESS_COARSE_LOCATION,
          ])
            .then((result) => {
              let t1Result = translatePermissionResult(
                result[PERMISSIONS.ANDROID.ACCESS_FINE_LOCATION],
                'Fine Location'
              );
              let t2Result = translatePermissionResult(
                result[PERMISSIONS.ANDROID.ACCESS_COARSE_LOCATION],
                'Cors Location'
              );

              if (t1Result.granted && t2Result.granted) {
                resolve(t1Result.message);
              } else {
                reject(`${t2Result.message}, ${t1Result.message}`);
              }
            })
            .catch((err) => {
              reject('Unable to request Location permissions');
            });
        } else {
          request(PERMISSIONS.IOS.LOCATION_WHEN_IN_USE)
            .then((result) => {
              let tResult = translatePermissionResult(result, 'Location');

              if (tResult.granted) {
                resolve(tResult.message);
              } else {
                reject(tResult.message);
              }
            })
            .catch((err) => {
              reject('Unable to request Location permissions');
            });
        }
      });
    };


    const requestCameraPermission = () => {
      return new Promise((resolve, reject) => {
        if (Platform.OS === 'android') {
          request(PERMISSIONS.ANDROID.CAMERA)
            .then((result) => {
              console.log(`Request Camera Permission Result`);
              console.log(result);
              let tResult = translatePermissionResult(result, 'Camera');
              if (tResult.granted) {
                resolve(tResult.message);
              } else {
                reject(tResult.message);
              }
            })
            .catch((err) => {
              console.log(`CATCH Error in requesting camera permission`);
              console.log(err);
              reject('Unable to Request Camera Permission');
            });
        } else {
          request(PERMISSIONS.IOS.CAMERA)
            .then((result) => {
              console.log(`Request Camera Permission Result`);
              console.log(result);
              let tResult = translatePermissionResult(result, 'Camera');
              if (tResult.granted) {
                resolve(tResult.message);
              } else {
                reject(tResult.message);
              }
            })
            .catch((err) => {
              console.log(`CATCH Error in requesting camera permission`);
              console.log(err);
              reject('Unable to Request Camera Permission');
            });
        }
      });
    };



    /// PERMISSION HANDLERS
    this.resolvePhotoLibraryPermission = () => {
      return new Promise((resolve, reject) => {
        checkPhotoLibraryPermission()
          .then((granted) => {
            resolve(granted);
          })
          .catch((err) => {
            requestPhotoLibraryPermission()
              .then((plGranted) => {
                resolve(plGranted);
              })
              .catch((err) => {
                reject(err);
              });
          });
      });
    };

    this.resolveCameraPermission = () => {
      return new Promise((resolve, reject) => {
        checkCameraPermission()
          .then((granted) => {
            resolve(granted);
          })
          .catch((err) => {
            requestCameraPermission()
              .then((plGranted) => {
                resolve(true);
              })
              .catch((err) => {
                reject(err);
              });
          });
      });
    };

       this.resolveLocationPermission = () => {
        return new Promise((resolve, reject) => {
          checkLocationPermission()
            .then((granted) => {
              resolve(granted);
            })
            .catch((err) => {
              requestLocationPermission()
                .then((plGranted) => {
                  resolve(plGranted);
                })
                .catch((err) => {
                  reject(err);
                });
            });
        });
      };





  }
}
const MyPermissionsController = new PermissionsController();
export default MyPermissionsController;
