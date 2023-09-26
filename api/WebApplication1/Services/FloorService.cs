using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using WebApplication1.Models;
using Newtonsoft.Json;
using System.IO;

namespace WebApplication1.Services
{
    public interface IFloorService
    {
        List<Floor> GetAll();

        Floor Get(string id);

    }
    public class FloorService: ServiceBase, IFloorService
    {
        private const string FilePath = @"\bin\Data\Floors.json";

        private List<Floor> _floors;

        public FloorService()
        {
            var savedData = ReadData();

            _floors =
                savedData != null
                ? savedData
                : new List<Floor>();
        }

        public Floor Get(string id)
        {
            return _floors.FirstOrDefault(x => x.nf_floorid == id);
        }

        public List<Floor> GetAll()
        {
            return _floors;
        }

        private List<Floor> ReadData()
        {
            var data = File.ReadAllText(GetStoragePath(FilePath));

            return JsonConvert.DeserializeObject<List<Floor>>(data);
        }
    }
}